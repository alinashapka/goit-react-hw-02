import clsx from "clsx";
import css from "./Options.module.css";

export default function Options({onUpdate, onReset, total}) {
    return(<div className={clsx(css.container)}>
        <button className={clsx(css.button)} onClick={() => onUpdate('good')}>Good</button>
        <button className={clsx(css.button)} onClick={() => onUpdate('neutral')}>Neutral</button>
        <button className={clsx(css.button)} onClick={() => onUpdate('bad')}>Bad</button>
        {total > 0 && (<button className={clsx(css.button)} onClick={onReset}>Reset</button>)}
    </div>)
}