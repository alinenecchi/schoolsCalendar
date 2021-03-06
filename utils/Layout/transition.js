import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

const TIMEOUT = 500;
const getTransitionStyles = {
  entering: {
    // position: `absolute`,
    opacity: 0,
    // transform: `translateY(-50px)`,
    transition: `all ${TIMEOUT}ms ease-in-out`,
  },
  entered: {
    transition: `all ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    // transform: `translateY(0px)`,
  },
  exiting: {
    transition: `all ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    // transform: `translateY(-50px)`,
  },
  exited: {
    transition: `all ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
    // transform: `translateY(-50px)`,
  },
};

const Transition = ({ children, location }) => {
  return (
    <TransitionGroup style={{ position: "relative" }}>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {status => (
          <div
            style={{
              ...getTransitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
};

export default Transition;
