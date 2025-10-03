import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PostComments from "./PostComments";

describe("Teste para inserção de comentários", () => {
  it("deve inserir dois comentários e renderizá-los", () => {
    render(<PostComments />);

    const input = screen.getByTestId("comment-input");
    const button = screen.getByTestId("add-comment-btn");

    fireEvent.change(input, { target: { value: "Primeiro comentário" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "Segundo comentário" } });
    fireEvent.click(button);

    const comments = screen.getAllByTestId("comment-item");
    expect(comments).toHaveLength(2);
    expect(comments[0]).toHaveTextContent("Primeiro comentário");
    expect(comments[1]).toHaveTextContent("Segundo comentário");
  });
});
