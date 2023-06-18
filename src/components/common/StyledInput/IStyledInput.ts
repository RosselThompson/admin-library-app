import { TextInputProps, DateInputProps, SelectInputProps } from "react-admin";
type InputProps = TextInputProps & DateInputProps & SelectInputProps
type InputType = "text" | "date" | "select"

export interface IStyledInput extends InputProps{
    inputtype: InputType
}