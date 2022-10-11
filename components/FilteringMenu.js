const FilteringMenu = ({ onChange}) => {
return (
    <div className="filtering-menu mb-2">
        <div onClick={() => {
            alert("clicking")
            onChange()
        }}>
            Change View
        </div>
    </div>
)
}

export default FilteringMenu