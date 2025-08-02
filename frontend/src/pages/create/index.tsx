import type { FC } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { INITIAL_VALUES, INPUT_FIELDS } from "../../utils/constants";
import { PLACE_SCHEMA } from "./../../utils/schemas";
import { useCreatePlace } from "../../service";

const Create: FC = () => {
  const { mutate, isPending } = useCreatePlace();
  // form gönderilince
  // e.preventDefault() otomatik olarak çalışır
  // values: formdaki bütün inputların değerlerini içeren obje
  const handleSubmit = (values: any) => {
    mutate(values);
  };
  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={PLACE_SCHEMA}
        onSubmit={handleSubmit}
      >
        <Form className="max-w-2xl mx-auto grid gap-10">
          {INPUT_FIELDS.map((i, key) => (
            <div key={key} className="field relative">
              <label htmlFor={i.name}>{i.label}</label>
              <Field
                id={i.name}
                type={i.type}
                name={i.name}
                placeholder={i.placeholder}
                className="input"
              />

              <ErrorMessage
                name={i.name}
                component="div"
                className="text-red-500"
              />
            </div>
          ))}

          <button
            disabled={isPending}
            type="submit"
            className="my-5 bg-blue-500 py-2 px-6 text-white rounded-md transition hover:bg-blue-600 cursor-pointer"
          >
            {isPending ? "Sending..." : "Send"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Create;
