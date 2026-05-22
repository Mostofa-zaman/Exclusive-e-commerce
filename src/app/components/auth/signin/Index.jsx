"use client";

import React from "react";
import Container from "../../common/Container";
import allImages from "../../../helpers/imageProvider";
import Button from "../../common/Button";



// for auth schema

    // const signInSchema = z.object({
    //   email: z.string().email("Invalid email address"),
    //   password: z.string().min(6, "Password must be at least 6 characters"),
    // });

const SignIn = () => {
  // for icon images
  const { authImage } = allImages;

  // for react hook form
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(signInSchema),
//   });

  //for login data
  const onSubmit = (data) => console.log(data);

  return (
    <section className="relative overflow-hidden lg:pt-[60px] lg:pb-[140px]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-10">
          {/* Image Section */}
          <figure
            className="
              hidden
              lg:block
              lg:absolute 
              lg:left-0 
              lg:top-1/2 
              lg:-translate-y-1/2
              lg:h-[500px] 
              lg:w-[500px]
              xl:h-[650px] 
              xl:w-[700px]
              2xl:h-[750px] 
              2xl:w-[800px]
            "
          >
            <img
              src={authImage}
              alt="authImage"
              className="h-full w-full object-cover rounded-lg lg:rounded-none"
            />
          </figure>

          {/* Form Section */}
          <div className="w-full flex justify-center lg:justify-end">
            <form
              className="w-full max-w-[371px]"
              
            >
              <h4 className="text-text2 heading36PXMedium">
                Log in to Exclusive
              </h4>

              <p className="title16PXRegular text-text2 pt-6 pb-12">
                Enter your details below
              </p>

              <div className="flex flex-col gap-y-10">
                <div>
                  {/* <input
                    type="email"
                    placeholder="Email"
                    className="placeholder:text-[#00000051] title16PXRegular text-[#00000051] border-b-2 border-[#00000030] py-2 w-full"
                    {...register("email")}
                  /> */}

                  {/* {errors.email && (
                    <p className="text-red-500 title16PXRegular mt-2">
                      {errors.email.message}
                    </p>
                  )} */}
                </div>

                <div>
                  {/* <input
                    type="password"
                    placeholder="Password"
                    className="placeholder:text-[#00000051] title16PXRegular text-[#00000051] border-b-2 border-[#00000030] py-2 w-full"
                    {...register("password")}
                  />

                  {errors.password && (
                    <p className="text-red-500 title16PXRegular mt-2">
                      {errors.password.message}
                    </p>
                  )} */}
                </div>
              </div>

              <div className="flex items-center gap-x-[87px] mt-10">
                <Button children={"Log In"} />

                <Button
                  children={"Forget Password?"}
                  className={"!p-0 bg-transparent !text-secondary2"}
                />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignIn;