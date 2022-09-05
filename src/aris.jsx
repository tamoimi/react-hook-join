// import React, { useState } from "react";
// import { FieldErrors, FieldErrorsImpl, useForm } from "react-hook-form";

// /**
//  * 일반적인 폼 =>
//  * 1. 인풋마다 스테이트를 가진다
//  * 2. 인풋마다 이벤트 리스너를 정의해야 한다
//  * 3. 서브밋을 할 때 밸리데이션을 인풋마다 구현해야 한다
//  *
//  * react-hook-form =>
//  * 1. 폼보다 적은 코드로 같은 기능을 구현할 수 있다
//  * 2. 인풋에 적용하기 쉽다
//  * 3. 이벤트를 신경쓰지 않아도 된다
//  * 4. 밸리데이션을 쉽게 구현할 수 있다
//  * 5. 더 나은 에러
//  * 6. 인풋을 컨트롤 할 수 있어야 한다
//  */

// // interface LoginForm {
// //   username: string;
// //   password: string;
// //   email: string;
// //   errors?: string;
// // }

// export default function Forms() {
//   // const [username, setUsername] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
//   //   const {
//   //     currentTarget: { value },
//   //   } = event;
//   //   setUsername(value);
//   // };
//   // const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
//   //   const {
//   //     currentTarget: { value },
//   //   } = event;
//   //   setEmail(value);
//   // };
//   // const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
//   //   const {
//   //     currentTarget: { value },
//   //   } = event;
//   //   setPassword(value);
//   // };
//   // const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
//   //   event.preventDefault();
//   //   console.log(username, email, password);
//   // }
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//     setError,
//     setValue,
//     reset,
//     resetField,
//   } = useForm({ mode: "onChange" });
//   const onValid = (data) => {
//     console.log("im valid!!!");
//     reset();
//   };
//   const onInvalid = (errors) => {
//     console.log(errors);
//   };
//   return (
//     <form onSubmit={handleSubmit(onValid, onInvalid)}>
//       <input
//         type={"text"}
//         placeholder="Username"
//         {...register("username", {
//           required: "The username is required.",
//           minLength: {
//             value: 5,
//             message: "The username should be longer than 5 chars.",
//           },
//         })}
//       />
//       {errors.username?.message}
//       <input
//         type={"email"}
//         placeholder="Email"
//         {...register("email", {
//           required: "The email is required.",
//           validate: {
//             notGmail: (value) =>
//               !value.includes("@gmail.com") || "Gmail is not allowed.",
//           },
//         })}
//         className={errors.email ? "bg-red-300 border-red-500" : ""}
//       />
//       {errors.email?.message ? (
//         <span className="text-red-500 text-sm">{errors.email.message}</span>
//       ) : (
//         ""
//       )}
//       <input
//         type={"password"}
//         placeholder="password"
//         {...register("password", { required: "The password is required." })}
//       />
//       <input type={"submit"} value="Create Account" />
//       {errors.errors?.message}
//     </form>
//   );
// }
