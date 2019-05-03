import React, { useState } from "react";
import Skeleton from "../src";
import "../src/assets/index";

export default function() {
    const [loading, setLoading] = useState(true);
    return (
        <div>
            <button onClick={() => setLoading(!loading)}>切换</button>
            <Skeleton loading={loading}>
                <p>加载完毕</p>
            </Skeleton>
        </div>
    );
}
