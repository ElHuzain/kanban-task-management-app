'use client';
import { useState } from "react";
import { Button } from "./button";
import LabelledInput from "./labelledInput";
import PresentationSection from "./presentationSection";
import SubtaskCheckbox from "./subtaskCheckbox";
import ThemeSwitcher from "./themeSwitcher";

const Presentation = () => {
    const [inputValues, setInputValues] = useState({
        input1: "",
        input2: "",
    });
    const [checkedSubtasks, setCheckedSubtasks] = useState({
        subtask1: false,
        subtask2: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        });
    }

    const handleCheckboxChange = (name: string, checked: boolean) => {
        setCheckedSubtasks({
            ...checkedSubtasks,
            [name]: checked,
        });
    }
    return (
        <div className="bg-bg p-12 space-y-8 w-full h-dvh">
      <PresentationSection title="Theme Switcher">
        <ThemeSwitcher />
      </PresentationSection>

      <PresentationSection title="Buttons">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </PresentationSection>

      <PresentationSection title="Inputs" className="space-y-4">
        <LabelledInput label="Label 1" value={inputValues.input1} name="input1" placeholder="Placeholder for input 1" onChange={handleInputChange} />
        <LabelledInput label="Errored Input" value={inputValues.input2} name="input2" error="This is an error message" placeholder="Placeholder for Errored Input" onChange={handleInputChange} />
      </PresentationSection>

      <PresentationSection title="Checkbox">
        <SubtaskCheckbox subtask={{ title: "Subtask-1", isCompleted: checkedSubtasks.subtask1 }} onCheckedChange={(checked) => handleCheckboxChange("subtask1", checked)} />
        <SubtaskCheckbox subtask={{ title: "Subtask-2", isCompleted: checkedSubtasks.subtask2 }} onCheckedChange={(checked) => handleCheckboxChange("subtask2", checked)} />
      </PresentationSection>
    </div>
    )
}

export default Presentation;
