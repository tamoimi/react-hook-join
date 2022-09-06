import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);
  const [isFullInput, setIsFullInput] = useState(false);

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <>
      <div className="react-hook-container">
        <h1>회원가입</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">사용자 이름</label>
          <input
            type="text"
            {...register("username", {
              required: "이름은 필수 값입니다.",
              minLength: {
                value: 2,
                message: "이름은 2자 이상 입력해주세요.",
              },
            })}
            placeholder="이름을 입력해주세요."
          />
          {errors.username && <p>{errors.username.message}</p>}

          <label htmlFor="id">아이디</label>
          <input
            type="text"
            {...register("id", {
              required: "아이디를 입력해주세요.",
            })}
            placeholder="아이디를 입력해주세요."
          />

          <label htmlFor="email">이메일</label>
          <input 
            type="text"
            {...register("email", {
              required: "이메일은 필수 값입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
              })} 
            placeholder="이메일을 입력해주세요."
          />
          {errors.email && <p>{errors.email.message}</p>}

          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            {...register("password", {
              required: "비밀번호는 필수 값입니다.",
              minLength: {
                value: 6,
                message: "비밀번호는 6자 이상 입력해주세요.",
              },
              maxLength: {
                value: 12,
                message: "비밀번호는 12자 이하로 입력해주세요.",
              },
            })}
            placeholder="비밀번호를 입력해주세요."
          />
          {errors.password && (
            <span>비밀번호는 6자 12자 이하로 입력하세요.</span>
          )}

          <label htmlFor="password_repeat"></label>
          <input
            type="password"
            {...register("password_repeat", {
              validate: (value) =>
                value === password.current || "비밀번호가 맞지 않습니다",
            })}
            placeholder="비밀번호를 입력해주세요."
          />
          {errors.password_repeat && <span>비밀번호를 다시 입력해주세요.</span>}

          {isFullInput ? (
            <input
              type="submit"
              className="submit"
              style={{ background: "orange" }}
            />
          ) : (
            <input type="submit" className="submit" />
          )}
        </form>
      </div>
    </>
  );
}
// 비밀번호 매치 읽어보고 적용하기
// https://codesandbox.io/s/react-hook-form-password-match-check-standard-validation-eo6en?file=/src/index.js:344-353

export default App;
