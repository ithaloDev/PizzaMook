import type { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode
}

const Container = ({children}: ContainerProps) => {
    return (
        <div className="px-5 md:px-3 lg:px-10">
            {children}
        </div>
    )
}

export default Container;