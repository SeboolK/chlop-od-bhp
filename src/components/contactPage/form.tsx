"use client";
import { useState, ChangeEvent, FormEvent, FocusEvent } from "react";
import {
  validateEmail,
  validateText,
  validatePolicy,
} from "../../lib/validate";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import classes from "./form.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorsType, FormDataType } from "@/lib/types";
import Button from "../UI/button";

const Form = () => {
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({
    name: "",
    email: "",
    message: "",
    privacyPolicy: "",
  });

  const [sending, setSending] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "name") {
      setErrors({
        ...errors,
        name: validateText(
          value,
          3,
          "To pole nie może być puste",
          "Wpisz co najmniej 3 znaki"
        ),
      });
    }

    if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(
          value,
          "To pole nie może być puste",
          "Wpisz poprawny adres email"
        ),
      });
    }

    if (name === "message") {
      setErrors({
        ...errors,
        message: validateText(
          value,
          15,
          "To pole nie może być puste",
          "Wpisz co najmniej 15 znaków"
        ),
      });
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    handleChange(
      e as ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    );
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
    setErrors({
      ...errors,
      privacyPolicy: validatePolicy(
        e.target.checked,
        "Jeśli chcesz wysłać wiadomość, musisz wyrazić zgodę na przetwarzanie danych osobowych"
      ),
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: ErrorsType = {
      name: validateText(
        formData.name,
        3,
        "To pole nie może być puste",
        "Wpisz co najmniej 3 znaki"
      ),
      email: validateEmail(
        formData.email,
        "To pole nie może być puste",
        "Wpisz poprawny adres email"
      ),
      message: validateText(
        formData.message,
        15,
        "To pole nie może być puste",
        "Wpisz co najmniej 15 znaków"
      ),
      privacyPolicy: validatePolicy(
        isAgreed,
        "Musisz zaakceptować politykę prywatności"
      ),
    };

    setErrors((prev) => ({ ...prev, ...newErrors }));
    const hasErrors = Object.values(newErrors).some((e) => e !== "");

    if (!hasErrors) {
      try {
        setSending(true);

        const response = await fetch("/api/send-mail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData?.error || "Wystąpił błąd podczas wysyłania"
          );
        }

        toast.success("Formularz został wysłany!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setIsAgreed(false);
      } catch (error) {
        console.error("Błąd podczas wysyłki formularza:", error);
        toast.error(
          "Nie udało się wysłać formularza. Spróbuj ponownie później."
        );
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <div className={classes.form__toast}>
        <ToastContainer position="top-center" />
      </div>
      <div className={classes.form__grid}>
        <label htmlFor="name">
          Imię i nazwisko*
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="name"
          />
          {errors.name && <p className={classes.error}>{errors.name}</p>}
        </label>

        <label htmlFor="email">
          Email*
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="email"
          />
          {errors.email && <p className={classes.error}>{errors.email}</p>}
        </label>
      </div>
      <label htmlFor="message">
        Wiadomość*
        <textarea
          id="message"
          name="message"
          rows={7}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        ></textarea>
        {errors.message && <p className={classes.error}>{errors.message}</p>}
      </label>
      <div className={classes.form__policyFlex}>
        <div className={classes.form__privacyPolicy}>
          <label htmlFor="agreeTerm">
            <input
              type="checkbox"
              id="agreeTerm"
              checked={isAgreed}
              onChange={handleCheckboxChange}
            />
            <p>
              Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z &nbsp;
              <Link href="/polityka-prywatnosci">Polityką prywatności</Link>
            </p>
          </label>
        </div>
        {errors.privacyPolicy && (
          <p className={classes.error}>{errors.privacyPolicy}</p>
        )}
      </div>
      <div className={classes.form__btnWrapper}>
        <Button
          className={classes.form__btn}
          disabled={sending}
        >
          {sending ? "Wysyłanie..." : "Wyślij"}
        </Button>
      </div>
    </form>
  );
};

export default Form;
