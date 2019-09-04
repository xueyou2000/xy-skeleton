import React from "react";
import { render } from "@testing-library/react";
import Skeleton from "../src";

describe("Skeleton", () => {
    test("render", () => {
        const mockMatchMedia = jest
            // 默认
            .fn(() => ({ matches: false, addListener: jest.fn(), removeListener: jest.fn() }))
            // 第一次结果
            .mockImplementationOnce(() => ({ matches: true, addListener: jest.fn(), removeListener: jest.fn() }))
            // 第二次结果
            .mockImplementationOnce(() => ({ matches: false, addListener: jest.fn(), removeListener: jest.fn() }));

        (global as any).matchMedia = mockMatchMedia;

        const wrapper = render(
            <Skeleton loading={true}>
                <p>加载完毕</p>
            </Skeleton>,
        );

        const root = wrapper.container.querySelector(".xy-skeleton");

        expect(root.children.length).toBe(6);

        wrapper.rerender(
            <Skeleton loading={false}>
                <p>加载完毕</p>
            </Skeleton>,
        );

        const text = wrapper.getByText("加载完毕");
        expect(text.parentElement).toBe(root);
    });
});
