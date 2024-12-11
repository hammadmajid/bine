export default function Home() {
  return (
    <main id="main-content" className="p-4 space-y-8">
      <section className="space-y-4">
        <div className="flex flex-row items-center gap-1">
          <h1 className="text-2xl font-bold">Bine</h1>
          <a
            href="/rss.xml"
            className="fill-light-accent hover:fill-light-accent-hover"
          >
            {/* <Fragment set:html={icons.rss} /> */}
            <span className="sr-only">RSS Feed</span>
          </a>
        </div>
        <p className="text-justify">
          My name is Hammad Majid and I&apos;m a Computer Science student from
          Islamabad. I&apos;m currently doing front-end web development as a
          freelancer.
        </p>
        <p className="text-justify">
          On this website you can find information about me, projects I have
          worked on and posts I have written. I write mostly about stuff I find
          interesting so there is no specific theme. These topics might include:
          low level programming, web technologies, physics, mathematics and tea
          recipes.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Posts</h2>
        <p className="text-center">Not posts yet.</p>
      </section>
    </main>
  );
}
