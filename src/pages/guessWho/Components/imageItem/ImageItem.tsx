import './imageItem.css'
import { ReactNode } from 'react';

interface ImageItemProps {
    tag: ReactNode;
}

export default function ImageItem({ tag }: ImageItemProps) {

    return (
        <div className="imageitem-container">
            {tag}
        </div>
    )
}