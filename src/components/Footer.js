export const Footer = () => {
  return (
    <footer className="">
      <div className="flex justify-around items-center p-8 bg-gray-100">
        <p className="text-2xl">@Shopbyte 2023</p>
        <div className="flex gap-4 ">
          <a
            className="text-xl hover:underline hover:text-blue-600 transition-all duration-200"
            href="https://twitter.com/2xprathamesh"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            className="text-xl hover:underline hover:text-blue-600 transition-all duration-200"
            href="https://github.com/prathamesh2525"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="text-xl hover:underline hover:text-blue-600 transition-all duration-200"
            href="https://www.linkedin.com/in/prathamesh-madniwale-142b601a6/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
