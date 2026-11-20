import { Container } from "./ui";

export function ClosingCta({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-peach">
      <Container className="py-12 md:py-16">
        <div className="max-w-[40rem]">
          <h2 className="text-2xl md:text-[2rem] md:leading-tight">{title}</h2>
          <p className="mt-3 text-ink/80">{text}</p>
        </div>
      </Container>
    </section>
  );
}
