"use client"
import { useState, useEffect } from "react";

interface Question {
  id: number;
  question: string;
  options: Option[];
}

interface Option {
  id: number;
  option: string;
}

const Page: React.FC = () => {
  const [data, setData] = useState<Question[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to your endpoint
        const questionnaireIdResponse = await fetch("/api/Questionnaire");
        if (!questionnaireIdResponse.ok) {
          throw new Error("Failed to fetch questionnaire ID");
        }
        const questionnaireIdData = await questionnaireIdResponse.json();
        const questionnaireId = questionnaireIdData[0].id;

        const questionsResponse = await fetch(
          `/api/questions?questionnaireId=${questionnaireId}`
        );
        if (!questionsResponse.ok) {
          throw new Error("Failed to fetch questions");
        }
        const responseData: Question[] = await questionsResponse.json();
        setData(responseData);
      } catch (error) {
        setError(error as Error);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <h1>Questions</h1>
          <ul>
            {data.map((question: Question) => (
              <li key={question.id}>
                <div>{question.question}</div>
                <div>
                  {question.options.map((option: Option) => (
                    <div key={option.id}>{option.option}</div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
