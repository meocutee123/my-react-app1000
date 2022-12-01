import style from './style.module.scss';

import { Accrodion } from '@components/Elements/Accordion';
import { ReactComponent as ArrowRight } from '@assets/icons/arrow-right.svg';
export function Faq() {
  return (
    <>
      <div className={style.container}>
        <div className={style.frequentlyAskedQuestion}>
          <h1>
            <span>Frequently</span> Asked Questions
          </h1>
          <p>
            Did you come here for something in particular or just general
            Riker-bashing? And blowing
          </p>
        </div>
        <Accrodion />
        <div className={style.contactUs}>
          <h3>Can't find an answer to your question?</h3>
          <button>
            Contact Us <ArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
