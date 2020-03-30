import { createStore } from "redux";
import { render } from "@testing-library/react";
import reducer from "./reducer";

export const store =createStore(reducer)