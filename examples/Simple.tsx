import React, { useState } from "react";
import Skeleton from "../src";

export default function() {
    const [loading, setLoading] = useState(true);
    return (
        <div>
            <p>简单演示</p>
            <button onClick={() => setLoading(!loading)}>切换</button>
            <Skeleton loading={loading}>
                <p>加载完毕</p>
            </Skeleton>
        </div>
    );
}
