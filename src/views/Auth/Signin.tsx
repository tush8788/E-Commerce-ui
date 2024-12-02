import { Button, Input, Image } from "@nextui-org/react"
import signInImg from "/sigin.png"
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik"
import * as Yup from 'yup'

const Signin = () => {


    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email Required'),
        otp: Yup.number()
            .required('otp Required')
    })




    return (
        <div className="w-full h-full grid grid-cols-2">
            <div className="flex items-center justify-center">
                <div className="w-[100%] h-[80%]">
                    <Image
                        // isBlurred
                        src={signInImg}
                        alt="NextUI Album Cover"
                        className="w-full rounded-none h-full"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-[70%] h-[40%]">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl">Sign In Into Bazar</h1>
                        <p className="text-sm">Enter your details below</p>
                    </div>
                    <Formik
                        initialValues={
                            {
                                email: '',
                                otp: '',
                            }
                        }
                        validationSchema={validationSchema}
                        onSubmit={async (values) => {
                            console.log("values", values)
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            setFieldValue,
                            isSubmitting,
                        }) => (<>
                            <Form>
                                <Field name="email">
                                    {({ field, form }: any) => (
                                        <Input
                                            type="email"
                                            variant={'underlined'}
                                            label="Email"
                                            value={values.email}
                                            errorMessage={errors.email}
                                            name="email"
                                            isInvalid={(errors.email && touched.email && errors.email)}
                                            onChange={(e) => {
                                                setFieldValue(field.name, e.target.value)
                                                console.log("edsd ", e.target.value)
                                            }}
                                        />
                                    )}
                                </Field>

                                <Field name="otp">
                                    {({ field, form }: any) => (
                                        <Input
                                            type="number"
                                            variant={'underlined'}
                                            label="OTP"
                                            value={values.otp}
                                            errorMessage={errors.otp}
                                            isInvalid={(errors.otp && touched.otp && errors.otp)}
                                            onChange={(e) => {
                                                setFieldValue(field.name, e.target.value)
                                            }}
                                        />
                                    )}
                                </Field>
                                <br></br>
                                <Button type="submit">
                                    Submit
                                </Button>


                            </Form>
                        </>)}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Signin