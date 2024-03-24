function BorderHeading({ content, color, fontWeight }) {
    return (
        <div className="border-b-2 pb-2 text-sm" style={{ color: color, fontWeight: fontWeight }}>
            {content}
        </div>
    );
}

export default BorderHeading;