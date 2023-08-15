import { Button } from "@/components/core/Button";

export default function Home() {
  return (
    <div>
      Home
      <Button className="">button</Button>
      <Button icon="menu">button</Button>
      <Button icon="menu"></Button>
      <Button icon="close" position="right">
        button
      </Button>
    </div>
  );
}
