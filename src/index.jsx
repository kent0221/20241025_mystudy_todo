import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Todo } from "./Todo";

const creatElement = document.getElementById("root");
const root = createRoot(creatElement);

root.render(
    <StrictMode>
        <Todo />
    </StrictMode>
);