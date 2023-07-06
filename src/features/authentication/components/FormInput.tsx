import { FC } from "react";
import { TextField } from "@mui/material";
import { InputPropsType } from "../types/common.types";

const FormInput: FC<InputPropsType> = (({ register, name, label, error }) => {
        return (
            <TextField
                { ...register(name) }
                fullWidth
                label={label}
                error={error ? true : false}
                helperText={error?.message}
            />
        );
    })

export default FormInput;