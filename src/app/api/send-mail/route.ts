import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Brak wymaganych pól" }), {
        status: 400,
      });
    }

    const content = `
    Imię i nazwisko: ${name}
    Email: ${email}
      
    Wiadomość:
    ${message}
  `;

    // Konfiguracja transportu SMTP (np. Gmail, SendGrid, itp.)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // Twój email
        pass: process.env.SMTP_PASS, // Hasło lub app password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL, // Adres, na który chcesz otrzymywać maile
      subject:
        "Nowa wiadomość z formularza kontaktowego na stronie Chłop od BHP",
      text: content,
    });

    return new Response(JSON.stringify({ message: "Wysłano" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Błąd wysyłki maila:", error);
    return new Response(JSON.stringify({ error: "Błąd serwera" }), {
      status: 500,
    });
  }
}
