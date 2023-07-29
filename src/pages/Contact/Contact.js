export default function Home() {
  return (
    <div className="h-screen content flex flex-wrap grid-cols-1 place-content-center m-2">
      <h1 className="text-xl font-extrabold m-4">
        You can email me directly at shaboon.dev@gmail.com or you can send a
        message through the form below
      </h1>
      <form
        action="mailto:shaboon.dev@gmail.com"
        method="post"
        encType="text/plain"
      >
        <input
          className="w-max mr-4"
          type="text"
          name="name"
          placeholder="Name"
          required-="true"
        />
        <input
          className="w-max mr-4"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="mr-4"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea
          className="mr-4"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <input className="mr-4" type="submit" value="Send" />
      </form>
    </div>
  );
}
