import { useState } from "react";
import {
  Form,
  Button,
  Checkbox,
  DatePicker,
  Input,
  Select,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";

const AntdForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      Dob: values.Dob ? values.Dob.format("DD-MM-YYYY") : null,
    };

    setData((prev) => [...prev, formattedValues]);
    message.success("Form submitted successfully!");
    form.resetFields();
  };

  console.log(data, "data");
  return (
    <>
      <div className="flex justify-end p-4 bg-slate-400">
        <Button type="primary" onClick={() => navigate("/")}>
          {" "}
          Home
        </Button>
      </div>
      <>
        <p className="font-semibold text-center text-2xl p-4 bg-gray-100">
          Form Designed Through Antd
        </p>
      </>
      <div className="bg-gray-100 h-screen w-full flex justify-center p-6">
        <div className="w-full max-w-md bg-white p-4">
          <Form
            form={form}
            labelCol={{ span: 8 }}
            autoComplete="off"
            onFinish={onFinish}
          >
            <Form.Item
              name="Fullname"
              label="Full Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your name" />
            </Form.Item>
            <Form.Item
              name="mobile"
              label="Mobile Number"
              rules={[
                {
                  required: true,
                  message: "Please enter your mobile number",
                },
                {
                  type:'tel',  
                  pattern: /^[6-9]\d{9}$/,
                  message: "Please enter a valid 10-digit mobile number",
                },
              ]}
              hasFeedback
            >
              <Input
                maxLength={10}
                placeholder="Enter your mobile number"
                type="tel"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "please enter your mail",
                },
                { type: "email", message: "please enter the valid email" },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your mail" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "please enter the password",
                },
                { min: 6 },
                {
                  validator: (_, value) => {
                    const hasUpperCase = /[A-Z]/.test(value);
                    const hasNumber = /\d/.test(value);
                    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

                    if (value && hasUpperCase && hasNumber && hasSpecialChar) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "Password must contain at least one uppercase letter, one number, and one special character"
                    );
                  },
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Type your password" />
            </Form.Item>
            <Form.Item
              name="ConfirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "please enter the password",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match"));
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>
            <Form.Item name="gender" label="Gender">
              <Select placeholder="Select your gender">
                <Select.Option>Male</Select.Option>
                <Select.Option>Female</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="Dob"
              label="Date of Birth"
              rules={[
                {
                  required: true,
                  message: "Please provide your date of birth",
                },
              ]}
            >
              <DatePicker picker="date" placeholder="Choose your birthday" />
            </Form.Item>
            <Form.Item
              name="website"
              label="Website"
              rules={[
                {
                  required: true,
                  message: "Enter the valid url",
                },
                { type: "url", message: "Enter the valid url" },
              ]}
            >
              <Input placeholder="Add your website url" />
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          "To Proceed,you need to agree our terms & conditions"
                        ),
                },
              ]}
            >
              <Checkbox>
                Agree to our{" "}
                <a href="https://google.com">Terms and Conditions</a>
              </Checkbox>
            </Form.Item>
            <Form.Item className="text-center">
              <Button block type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AntdForm;
