import DialogProvider from "./DialogProvider";
import MyComponent from "./MyComponent";

export default function App() {
  return (
    <DialogProvider>
      <MyComponent />
    </DialogProvider>
  );
}
