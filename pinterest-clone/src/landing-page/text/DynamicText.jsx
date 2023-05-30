import styles from "@/styles/DynamicText.module.css"
import { useState } from "react";

const DynamicText = () => {

    const [visible, setVisible] = useState(true);

    const dynamicVisibilityClass = visible ? "text-green-600" : "hidden";

    return (
        <div className="text-4xl">
            <p onAnimationEnd={() => setVisible(false)} className={`${styles.dynamicText} ${dynamicVisibilityClass}`}>Pujan</p>
        </div>
    )
}

export default DynamicText;