'use client';
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ui/themeSwitcher";
import SubtaskCheckbox from "@/components/ui/subtaskCheckbox";
import LabelledInput from "@/components/ui/labelledInput";
export default function Home() {
  return (
    <div className="bg-bg border-2 border-red-500">
      <h1>Hello World</h1>
      <div className="flex gap-2">
        <Button size="lg">Button Primary (L)</Button>
        <Button variant="destructive">Click me</Button>
        <Button variant="secondary">Click me</Button>
      </div>
      <div>
        <h1 className="heading-xl">Heading xl</h1>
        <h2 className="heading-l">Heading l</h2>
        <h3 className="heading-m">Heading m</h3>
        <h4 className="heading-s">Heading s</h4>
        <p className="body">Body</p>
        <p className="body-bold">Body bold</p>
      </div>
      <div className="m-4">
        <SubtaskCheckbox subtask={{ title: "Subtask", isCompleted: true }} />
      </div>

      <div className="m-4">
        <LabelledInput label="Label" value="wdwd" error="This is an error message" placeholder="wdwdwdwdw" onChange={() => { }} />
      </div>
      <ThemeSwitcher />
    </div>
  );
}
