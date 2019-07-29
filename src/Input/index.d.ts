import { PseudoBoxProps } from "../PseudoBox";
import { ForwardRefExoticComponent, RefAttributes, ReactElement } from "react";

interface IInput {
  /**
   * If `true` sets the input to readonly state
   */
  isReadOnly?: boolean;
  /**
   * The aria-label of the input.
   */
  "aria-label"?: string;
  /**
   * The size of the input.
   * Possible values: `md`, `sm` or `lg`
   */
  size?: "md" | "sm" | "lg";
  /**
   * The size of the input.
   */
  as?: string | React.ReactElement;
  /**
   * The type of the input
   */
  type?: "text" | "email" | "number" | "password" | "search";
  /**
   * The state of the input.
   * Possible values: `success`, `error` or `warning`.
   */
  state?: "success" | "error" | "warning";
  /**
   * The variant of the input.
   * Possible values: `outline`, `unstyled`, `flushed` or `filled`.
   */
  variant?: "outline" | "unstyled" | "flushed" | "filled";
}

export type InputProps = IInput &
  PseudoBoxProps &
  React.HTMLAttributes<{}> &
  RefAttributes<HTMLDivElement>;

declare const Input: ForwardRefExoticComponent<InputProps>;

export default Input;
