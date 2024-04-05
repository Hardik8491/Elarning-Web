
"use client";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useParams, useSearchParams } from "next/navigation";
import { Router } from "lucide-react";

interface Question {
  id: string;
  question: string;
  type: "single" | "multiple" | "range"; // Added support for different question types
  options?: string[]; // Options represented as string array
  selectedOption?: string | null;
  selectedOptions?: string[]; // For checkbox type questions
  sliderValue?: number; // For slider type questions
}

function Assessment(): JSX.Element {
  const params = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [responses, setResponses] = useState<{
    [key: string]: string | string[] | number;
  }>({});

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch questionnaire data from the server
        const questionnaireResponse = await axios.get("/api/Questionnaire");
  
        const questionnaireId = questionnaireResponse.data[0].id;

        // Fetch questions based on questionnaire ID
        const questionsResponse = await axios.get(
          `/api/questions?questionnaireId=${questionnaireId}`
        );

        // Set the fetched questions in the state
        setQuestions(
          questionsResponse.data.map((question: any) => ({
            ...question,
            selectedOption: null,
            selectedOptions: [], // Initialize for checkbox type questions
            sliderValue: 0, // Initialize for slider type questions
          }))
        );
      } catch (error) {
        setError(error as Error);
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const handleOptionChange = (questionId: string, selectedOption: string) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return {
          ...question,
          selectedOption,
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);

    // Store the response
    setResponses({ ...responses, [questionId]: selectedOption });
  };

  const handleCheckboxChange = (
    questionId: string,
    selectedOptions: string[]
  ) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return {
          ...question,
          selectedOptions,
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);

    // Store the response
    setResponses({ ...responses, [questionId]: selectedOptions });
  };

  const handleSliderChange = (questionId: string, sliderValue: number) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return {
          ...question,
          sliderValue,
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);

    // Store the response
    setResponses({ ...responses, [questionId]: sliderValue });
  };

  const handleSubmit = async () => {
    // You can handle the form submission here

    // const res=  await axios.post("/api/response");
    axios
      .post("/api/response", {
        // responses,
        studentId: params.studentId,
        questionId: "1",
        question: "question",
        answer: "responses",
      })
      .then((response) => {

      });
  };

  return (
    <div className="bg-white p-8  rounded-lg border shadow-md max-w-4xl mx-auto">
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
                        id={`option_${index}`} // Use index as ID
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
              <div className="flex justify-between items-center ">
                {question.options?.map((optionText, index) => (
                  <div key={index} className="flex gap-1 items-center">
                    <input
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
            {question.type === "range" && (
              <input
                type="range"
                min={0}
                max={100}
                value={question.sliderValue}
                onChange={(e) =>
                  handleSliderChange(question.id, parseInt(e.target.value))
                }
              />
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
