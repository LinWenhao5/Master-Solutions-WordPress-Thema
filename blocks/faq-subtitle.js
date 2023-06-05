import { RichText} from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("blocktheme/faq-subtitle", {
    title: "FAQ Subtitle",
    attributes: {
        text: {type: "string", default:"lorem ipsum"}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {
    function handelTextChange(x) {
        props.setAttributes({text: x});
    }

    return (
        <>
            <div className="algemeen">
                <RichText
                    tagName="h3" className="heading-20 algemeen"
                    value={props.attributes.text} onChange={handelTextChange}
                />
            </div>
        </>
    )
}

function SaveComponent(props) {
    return <div className="algemeen">
        <h3 className="heading-20 algemeen">{props.attributes.text}</h3>
    </div>
}
