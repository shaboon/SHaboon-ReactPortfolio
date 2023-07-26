export default function Home() {
  return (
    <div className="content">
      <div className="">
        <h1 className="">Sean Haboon</h1>
      </div>
      <form
        action="mailto:shaboon.dev@gmail.com"
        method="post"
        encType="text/plain"
      >
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
