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
        <input className="" type="text" name="name" placeholder="Name" />
        <input className="" type="email" name="email" placeholder="Email" />
        <input className="" type="text" name="subject" placeholder="Subject" />
        <textarea className="" name="message" placeholder="Message"></textarea>
        <input className="" type="submit" value="Send" />
      </form>
    </div>
  );
}
