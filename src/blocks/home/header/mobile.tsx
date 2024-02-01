import * as Dialog from "@radix-ui/react-dialog";
import { LogIn, UserPlus, X } from "lucide-react";
import styles from "./mobile.module.scss";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { HeaderLinks } from "./links";

export function HeaderMobile(props: Dialog.DialogProps) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <div className="w-full h-screen flex flex-col items-start justify-start text-sm uppercase font-bold py-4 gap-4 text-white">
            <Logo />
            <nav className="w-full navigation flex flex-col items-center justify-center gap-4">
              <ul className="w-full flex flex-col items-start justify-center text-lg gap-8 px-4">
                {HeaderLinks.map((link) => {
                  return (
                    <li key={link.href}>
                      {!link.pure ? (
                        <Link href={link.href}>{link.title}</Link>
                      ) : (
                        <a href={link.href}>{link.title}</a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <nav className="w-full flex flex-col items-center justify-center gap-4 px-4">
              <button
                className="absolute top-0 right-0 p-4 text-slate-100"
                onClick={() => {
                  if (props.onOpenChange) {
                    props.onOpenChange(false);
                  }
                }}
              >
                <X fontSize={"24px"} />
              </button>

              <Link
                href="https://app.ifabit.com/auth/signin"
                className="w-full px-4 py-3 text-sm whitespace-nowrap text-primary-500 rounded-md transition-all hover:text-primary-700 flex flex-row items-center justify-start gap-4"
              >
                <LogIn fontSize={24} />
                Se connecter
              </Link>
              <Link
                href="https://app.ifabit.com/auth/signup"
                className="w-full px-4 py-3 text-sm whitespace-nowrap bg-primary-600 rounded-md text-slate-200 transition-all hover:bg-primary-500 flex flex-row items-center justify-start gap-4"
              >
                <UserPlus fontSize={24} />
                S'inscrire
              </Link>
            </nav>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
