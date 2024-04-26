"use client";
// Import statements for React and other dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useParams } from "next/navigation";
import { Clock } from "lucide-react";
import useAuthentication from "@/components/isAuth/IsAuth";
import { useSession } from "next-auth/react";

// Define the Question interface
interface Question {
  id: string;
  question: string;
  type: "single" | "multiple" | "range";
  options?: string[];
  selectedOption?: string | null;
  selectedOptions?: string[];
  sliderValue?: string;
}

// Define the Assessment component
function Assessment(): JSX.Element {
  const params = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [responses, setResponses] = useState<{
    [key: string]: string[] | null | string;
  }>({});
  const session = useSession();
  useAuthentication(session);
  // Fetch questionnaire data from the server
  useEffect(() => {
    async function fetchData() {
      try {
        const questionnaireResponse = await axios.get("/api/Questionnaire");
       
        
        const questionnaireId = questionnaireResponse.data[1].id;
        const questionsResponse = await axios.get(
          `/api/questions?questionnaireId=${questionnaireId}`
        );
       
        
        setQuestions(
          questionsResponse.data.map((question: any) => ({
            ...question,
            selectedOption: null,
            selectedOptions: [],
            sliderValue: 0,
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Function to handle option change
  const handleOptionChange = (questionId: string, selectedOption: string) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return { ...question, selectedOption };
      }
      return question;
    });
    setQuestions(updatedQuestions);
    setResponses({ ...responses, [questionId]: [selectedOption] });
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (
    questionId: string,
    selectedOptions: string[]
  ) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return { ...question, selectedOptions };
      }
      return question;
    });
    setQuestions(updatedQuestions);
    setResponses({ ...responses, [questionId]: selectedOptions });
  };

  // Function to handle slider change
  const handleSliderChange = (questionId: string, sliderValue: string) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return { ...question, sliderValue };
      }
      return question;
    });
    setQuestions(updatedQuestions);
    setResponses({ ...responses, [questionId]: sliderValue });
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/response", {
        studentId: params.studentId,
        questions: questions.map((question) => ({
          questionId: question.id,
          question: question.question,
          response: Array.isArray(responses[question.id])
            ? responses[question.id]
            : [responses[question.id]] || null,
        })),
      });

      if (response.status === 201) {
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-white my-4 mt-24 p-8 rounded-lg border shadow-md max-w-4xl mx-auto">
      <div className="flex  mb-10 items-center font-bold text-base border p-2  rounded-xl  justify-between">
        <h2>Assessment Test</h2>
        <div className="flex items-center  gap-2">
          <span>
            <Clock />
          </span>
          <span>12-05-2023 12:09:04</span>
        </div>
      </div>
      <form className="space-y-8" onSubmit={handleSubmit}>
        {questions.map((question, i) => (
          <div key={question.id}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-blue-500">{i + 1}</div>
              <h2 className="text-lg font-semibold">{question.question}</h2>
            </div>
            {question.type === "single" && (
              <RadioGroup defaultValue="average">
                <div className="flex items-center justify-between">
                  {question.options?.map((optionText, index) => (
                    <React.Fragment key={index}>
                      <RadioGroupItem
                        className="text-black"
                        id={`option_${index}`}
                        value={optionText}
                        checked={question.selectedOption === optionText}
                        onClick={() =>
                          handleOptionChange(question.id, optionText)
                        }
                      />
                      <Label htmlFor={`option_${index}`}>{optionText}</Label>
                    </React.Fragment>
                  ))}
                </div>
              </RadioGroup>
            )}
            {question.type === "multiple" && (
              <div className="flex justify-between items-center">
                {question.options?.map((optionText, index) => (
                  <div key={index} className="flex gap-1 items-center">
                    <input
                      className="text-black bg-black "
                      type="checkbox"
                      id={`checkbox_${index}`}
                      checked={
                        question.selectedOptions?.includes(optionText) || false
                      }
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const selectedOptions = checked
                          ? [...(question.selectedOptions || []), optionText]
                          : (question.selectedOptions || []).filter(
                              (item) => item !== optionText
                            );
                        handleCheckboxChange(question.id, selectedOptions);
                      }}
                    />
                    <Label htmlFor={`checkbox_${index}`}>{optionText}</Label>
                  </div>
                ))}
              </div>
            )}
            {question.type === "range" && question.options && (
              <div>
                <input
                  className="text-black"
                  type="range"
                  min={question.options[0]} // Minimum value is the first option
                  max={question.options[question.options.length - 1]} // Maximum value is the last option
                  value={question.sliderValue}
                  onChange={(e) =>
                    handleSliderChange(question.id, e.target.value)
                  }
                />
                <p>Current Value: {question.sliderValue}</p>
              </div>
            )}
          </div>
        ))}
        <div className="flex justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Assessment;
