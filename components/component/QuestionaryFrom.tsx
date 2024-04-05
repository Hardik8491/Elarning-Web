"use client";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button_student";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";

interface Question {
    type: "single" | "multiple" | "range";
    question: string;
    options: string[];
    skills: string;
}

const QuestionnaireForm: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<Question[]>([]);
    const [age, setAge] = useState<number>(0);
    const [startDateTime, setStartDateTime] = useState<string>("");
    const [endDateTime, setEndDateTime] = useState<string>("");
    const [questionnaireName, setQuestionnaireName] = useState<string>("");

    const handleAddQuestion = (type: "single" | "multiple" | "range") => {
        let newQuestion: Question;
        switch (type) {
            case "single":
                newQuestion = {
                    type: "single",
                    question: "",
                    options: [""],
                    skills: "",
                };
                break;
            case "multiple":
                newQuestion = {
                    type: "multiple",
                    question: "",
                    options: [""],
                    skills: "",
                };
                break;
            case "range":
                newQuestion = {
                    type: "range",
                    question: "",
                    options: ["0"],
                    skills: "",
                };
                break;
            default:
                newQuestion = {
                    type: "single",
                    question: "",
                    options: [""],
                    skills: "",
                };
                break;
        }
        setFormData([...formData, newQuestion]);
    };

    const handleQuestionChange = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = e.target;
        const updatedFormData = [...formData];
        updatedFormData[index].question = value;
        setFormData(updatedFormData);
    };

    const handleOptionChange = (
        questionIndex: number,
        optionIndex: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = e.target;
        const updatedFormData = [...formData];
        updatedFormData[questionIndex].options[optionIndex] = value;
        setFormData(updatedFormData);
    };

    const handleSkillChange = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = e.target;
        const updatedFormData = [...formData];
        updatedFormData[index].skills = value;
        setFormData(updatedFormData);
    };

    const handleAddOption = (questionIndex: number) => {
        const updatedFormData = [...formData];
        updatedFormData[questionIndex].options.push("");
        setFormData(updatedFormData);
    };

    const handleRemoveOption = (questionIndex: number, optionIndex: number) => {
        const updatedFormData = [...formData];
        updatedFormData[questionIndex].options.splice(optionIndex, 1);
        setFormData(updatedFormData);
    };

    const handleRemoveQuestion = (questionIndex: number) => {
        const updatedFormData = [...formData];
        updatedFormData.splice(questionIndex, 1);
        setFormData(updatedFormData);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Submit form data to your API or perform any other action
            // Perform POST request to your API endpoint
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_URL}/api/Questionnaire`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        age,
                        startDateTime,
                        endDateTime,
                        questionnaireName,
                        questions: formData,
                    }),
                }
            );

            if (response.ok) {
                router.push("/assessments");
                // Handle success
            } else {
                // Handle error
                console.error("Failed to submit form data");
            }
        } catch (error: any) {
            console.error("Error submitting form data:", error);
            toast.error(error.message);
        }
    };

    return (
        <div className='container mx-auto mt-4'>
            <div className='flex items-center  pb-4 justify-between'>
                <div className='flex flex-col items-start'>
                    <h1 className=' text-2xl sm:text-3xl font-bold '>
                        Create New Assessment
                    </h1>
                    <p className='text-gray-600'>Add a new Question </p>
                </div>
            </div>
            <hr className='mb-10 ' />

            <div className='mb-4 w-full grid sm:gap-4 items-center  sm:grid-cols-2 md:grid-cols-3'>
                <div className='flex items-start flex-col py-2'>
                    <Label htmlFor='Questionnaire'>Questionnaire</Label>
                    <Input
                        name='Questionnaire'
                        className='border rounded w-full px-2 py-2 mr-2 my-2'
                        type='text'
                        placeholder='Enter your questionnaire name'
                    />
                </div>

                <div className='flex items-start flex-col py-2'>
                    <Label htmlFor='Questionnaire'>Age</Label>
                    <Input
                        name='Age'
                        className='border rounded px-2 w-full py-2 mr-2 my-2'
                        type='text'
                        defaultValue='10'
                        placeholder='Enter Student Age'
                        onChange={(e) => {
                            setAge(parseInt(e.target.value));
                        }}
                    />
                </div>

                <div className='flex items-start flex-col py-2'>
                    <Label htmlFor='DateTime'>Start DateTime</Label>
                    <Input
                        name='StartDateTime'
                        className='border rounded w-full px-2 py-2 mr-2 my-2'
                        type='datetime-local'
                        placeholder='Start Date and Time'
                        onChange={(e) => {
                            setStartDateTime(e.target.value);
                        }}
                    />
                </div>

                <div className='flex items-start flex-col py-2'>
                    <Label htmlFor='DateTime'>End DateTime</Label>
                    <Input
                        name='EndDateTime'
                        className='border rounded w-full px-2 py-2 mr-2 my-2'
                        type='datetime-local'
                        placeholder='End Date and Time'
                        onChange={(e) => {
                            setEndDateTime(e.target.value);
                        }}
                    />
                </div>
            </div>

            <div className='mb-4  px-8  w-full  gap-4 mx-auto flex md:flex-row flex-col items-center justify-center '>
                <Button
                    className='bg-black w-full hover:bg-black text-white font-bold py-2 px-4 rounded mr-4'
                    onClick={() => handleAddQuestion("single")}
                >
                    Add Single Choice Question
                </Button>
                <Button
                    className='bg-black w-full hover:bg-black text-white font-bold py-2 px-4 rounded mr-4'
                    onClick={() => handleAddQuestion("multiple")}
                >
                    Add Multiple Choice Question
                </Button>
                <Button
                    className='bg-black w-full hover:bg-black text-white font-bold py-2 px-4 rounded mr-4'
                    onClick={() => handleAddQuestion("range")}
                >
                    Add Range Slider Question
                </Button>
            </div>

            <form className='mt-2' onSubmit={handleSubmit}>
                {formData.map((questionData, questionIndex) => (
                    <div key={questionIndex} className='mb-8 relative'>
                        <Input
                            type='text'
                            placeholder='Enter your question'
                            value={questionData.question}
                            onChange={(e) =>
                                handleQuestionChange(questionIndex, e)
                            }
                            className='border rounded py-2 px-4 w-full mb-4'
                        />
                        <div className='absolute top-0 right-2 mt-2'>
                            <FontAwesomeIcon
                                icon={faTrash}
                                className='text-black cursor-pointer transition duration-300 ease-in-out hover:text-red-600'
                                onClick={() =>
                                    handleRemoveQuestion(questionIndex)
                                }
                            />
                        </div>
                        <Input
                            type='text'
                            placeholder='Enter skills for this question'
                            value={questionData.skills}
                            onChange={(e) =>
                                handleSkillChange(questionIndex, e)
                            }
                            className='border rounded py-2 px-4 w-full mb-4'
                        />
                        {questionData.options.map((option, optionIndex) => (
                            <div key={optionIndex} className='relative'>
                                <Input
                                    type='text'
                                    placeholder={`Option ${optionIndex + 1}`}
                                    value={option}
                                    onChange={(e) =>
                                        handleOptionChange(
                                            questionIndex,
                                            optionIndex,
                                            e
                                        )
                                    }
                                    className='border rounded py-2 px-4 w-full mb-2'
                                />
                                <div className='absolute top-0 right-2 mt-2'>
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        className='text-black cursor-pointer transition duration-300 ease-in-out hover:text-red-600'
                                        onClick={() =>
                                            handleRemoveOption(
                                                questionIndex,
                                                optionIndex
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                        <div className='flex'>
                            <Button
                                type='button'
                                onClick={() => handleAddOption(questionIndex)}
                                className='mt-2 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-300 hover:text-gray-900'
                            >
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className='mr-2'
                                />
                                Add Option
                            </Button>
                        </div>
                    </div>
                ))}
                <div className='w-full items-start flex'>
                    <Button className='my-4'>Create</Button>
                </div>
            </form>
        </div>
    );
};

export default QuestionnaireForm;
