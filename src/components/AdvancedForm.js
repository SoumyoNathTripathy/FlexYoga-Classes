import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { HashLoader } from "react-spinners";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AdvancedForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const response = await fetch(process.env.REACT_APP_BACKENDURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const responseData = await response.json();
      const msg = responseData.paymentData.message;

      if (msg == "success") {
        setIsLoading(false);

        navigate("/success");
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false);
    navigate("/success");
  };
  return (
    <>
      <div className="App">
        <h1>Yoga Class Admission Form</h1>
        <h4
          style={{
            color: "#c2c2c2",

            margin: "16px",
          }}
        >
          Fill out the form to join our Yoga classes today!!
        </h4>

        {isLoading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5rem",
            }}
          >
            <HashLoader color="#c2c2c2" />
          </div>
        ) : (
          <Formik
            initialValues={{
              name: "",
              preferredBatch: "",
              age: "",
              email: "",
              acceptedTos: false,
            }}
            validationSchema={advancedSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <CustomInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                />
                <CustomInput
                  label="Email"
                  name="email"
                  type="text"
                  placeholder="Enter your mail"
                />

                <CustomInput
                  label="Age"
                  name="age"
                  type="number"
                  placeholder="Enter your age"
                />
                <CustomSelect
                  label="Preferred Batch"
                  name="preferredBatch"
                  placeholder="Please select a batch"
                >
                  <option value="">Please select a batch</option>
                  <option value="6-7AM">6-7AM</option>
                  <option value="7-8AM">7-8AM</option>
                  <option value="8-9AM">8-9AM</option>
                  <option value="5-6PM">5-6PM</option>
                </CustomSelect>

                <h5
                  style={{
                    color: "#888888",
                    textAlign: "left",
                    marginTop: "12px",
                  }}
                >
                  500 INR fees is to be paid on a month-to-month basis.
                  Participants can shift from one batch to another in different
                  month
                </h5>
                <CustomCheckbox type="checkbox" name="acceptedTos" />
                <button disabled={isSubmitting} type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </>
  );
};
export default AdvancedForm;
