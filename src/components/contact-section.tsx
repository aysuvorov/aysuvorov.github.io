import { Send } from "lucide-react";

import { CONTACT_EMAIL, CONTACT_TG_NICK, CONTACT_TG_URL } from "@/lib/contacts";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/40 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[560px] -translate-x-1/2 rounded-full bg-orange-400/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-orange-700 dark:text-orange-300">
              06 · Контакты
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Обсудим вашу задачу?
            </h2>
            <p className="mt-4 font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
              Опишите дизайн исследования, данные и вопрос — отвечу с оценкой
              подхода, сроков и объёма работ.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CopyEmailButton />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 border-border/70 bg-background/40 px-6 text-base"
              >
                <a href={CONTACT_TG_URL} target="_blank" rel="noreferrer">
                  <Send aria-hidden="true" />
                  {CONTACT_TG_NICK}
                </a>
              </Button>
            </div>
            <p className="mt-6 font-mono text-[11px] text-muted-foreground">
              Клик по адресу копирует его в буфер обмена · или{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline underline-offset-2 transition-colors hover:text-foreground"
              >
                напишите с почты
              </a>{" "}
              — почта и Telegram проверяются одинаково регулярно
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
