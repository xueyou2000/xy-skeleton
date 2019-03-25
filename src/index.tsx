import React from "react";
import classNames from "classnames";
import { SkeletonProps } from "./interface";
import { Row, Col } from "xy-grid";
import "xy-grid/assets/index.css";

const ColConfig = [[22], [8, 15], [6, 18], [13, 9], [4, 3, 16], [8, 6, 8]];

export function Skeleton(props: SkeletonProps) {
    const { prefixCls = "xy-skeleton", className, style, loading = true, rows = 6, children } = props;

    const content = [];
    for (let i = 0; i < rows; ++i) {
        const cfgIndex = i % ColConfig.length;
        content.push(
            <Row gutter={8} key={i}>
                {ColConfig[cfgIndex].map((d, j) => (
                    <Col key={j} span={d}>
                        <div className="stripe" style={{ animationDelay: `${j * 0.5}s` }} />
                    </Col>
                ))}
            </Row>
        );
    }

    return (
        <div className={classNames(prefixCls, className, { loading })} style={style}>
            {loading ? content : children}
        </div>
    );
}

export default Skeleton;
