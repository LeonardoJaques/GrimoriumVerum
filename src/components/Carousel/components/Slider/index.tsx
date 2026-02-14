import type { ReactNode } from 'react';
import styles from './Slider.module.css';

interface SliderProps {
    children: ReactNode;
}

interface SliderItemProps {
    children: ReactNode;
}

function Slider({ children }: SliderProps) {
    return <ul className={styles.container}>{children}</ul>;
}

export function SliderItem({ children }: SliderItemProps) {
    return <li className={styles.sliderItem}>{children}</li>;
}

export default Slider;
