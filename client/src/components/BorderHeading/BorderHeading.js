function BorderHeading({ content, color, fontWeight }) {
    return (
        <div className="border-b-2" style={{ color: color, fontWeight: fontWeight }}>
            {content}
        </div>
    );
}

export default BorderHeading;