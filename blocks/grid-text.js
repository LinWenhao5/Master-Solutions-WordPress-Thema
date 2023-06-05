import { ToolbarGroup, ToolbarButton, Popover} from "@wordpress/components"
import {
    RichText,
    BlockControls,
    __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { link } from "@wordpress/icons"
import { useState } from "@wordpress/element"

registerBlockType("blocktheme/grid-text", {
    title: "Grid Text",
    edit: EditComponent,
    supports: {
        align: ["full"],
    },
    attributes: {
        listTitle1: {type: "string", default: "Lorem ipsum"},
        listContent1: {type: "string", default: "Lorem ipsum"},
        listTitle2: {type: "string", default: "Lorem ipsum"},
        listContent2: {type: "string", default: "Lorem ipsum"},
        listTitle3: {type: "string", default: "Lorem ipsum"},
        listContent3: {type: "string", default: "Lorem ipsum"},
        heading: {type: "string", default: "Lorem ipsum"},
        text: {type: "string", default: "Lorem ipsum"},
        linkObject: {type: "object", default: {url: ""} },
        buttonText: {type: "string", default: "Meer over Security Bridge"}
    },
    save: SaveComponent,
});

function EditComponent(props) {
    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)

    function buttonHandler(props) {
        setIsLinkPickerVisible(prev => !prev);
    }

    function handleLinkChange(newLink) {
        props.setAttributes({linkObject: newLink});
    }
    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton onClick={buttonHandler} icon={link} />
                </ToolbarGroup>
            </BlockControls>
            <div id="w-node-_370734ad-4f23-3a69-a85a-2733e5383acb-495a224b" className="div-block-60">

                <RichText
                    tagName="h1" className="heading-26"
                    value={props.attributes.heading} onChange={(x)=>props.setAttributes({ heading: x})}
                />

                <RichText
                    tagName="div" className="text-block-36"
                    value={props.attributes.text} onChange={(x)=>props.setAttributes({ text: x})}
                />


                <ul role="list" className="list-4">
                    <RichText
                        tagName="li" className="list-item"
                        value={props.attributes.listTitle1} onChange={(x)=>props.setAttributes({ listTitle1: x})}
                    />
                    <RichText
                        tagName="p" className="text-block"
                        value={props.attributes.listContent1} onChange={(x)=>props.setAttributes({ listContent1: x})}
                    />
                    <RichText
                        tagName="li" className="list-item"
                        value={props.attributes.listTitle2} onChange={(x)=>props.setAttributes({ listTitle2: x})}
                    />
                    <RichText
                        tagName="p" className="text-block"
                        value={props.attributes.listContent2} onChange={(x)=>props.setAttributes({ listContent2: x})}
                    />
                    <RichText
                        tagName="li" className="list-item"
                        value={props.attributes.listTitle3} onChange={(x)=>props.setAttributes({ listTitle3: x})}
                    />
                    <RichText
                        tagName="p" className="text-block"
                        value={props.attributes.listContent3} onChange={(x)=>props.setAttributes({ listContent3: x})}
                    />
                </ul>
                <RichText allowedFormats={[]}
                          tagName="a" className={`button-22 w-button`} value={props.attributes.buttonText} onChange={(x)=>props.setAttributes({ buttonText: x})}
                />
            </div>
            {isLinkPickerVisible && (
                <Popover position="middle center">
                    <LinkControl setttings={[]} value={props.attributes.linkObject} onChange={handleLinkChange} />
                    <button variant="primary" onClick={() => setIsLinkPickerVisible(false)} style={{ display:"block", width: "100%" }}>
                        Confirm Link
                    </button>
                </Popover>
            )}
        </>
    );
}

function SaveComponent(props) {
    return <div id="w-node-_370734ad-4f23-3a69-a85a-2733e5383acb-495a224b" className="div-block-60">
            <h1 className="heading-26">{props.attributes.heading}</h1>
            <div className="text-block-36">{props.attributes.text}</div>
            <ul role="list" className="list-4">
                <li className="list-item"><strong>{props.attributes.listTitle1}</strong>
                    <br/>{props.attributes.listContent1}
                </li>
                <li className="list-item"><strong>{props.attributes.listTitle2}</strong>
                    <br/>{props.attributes.listContent2}</li>
                <li className="list-item"><strong>{props.attributes.listTitle3}</strong>
                    <br/>{props.attributes.listContent3}
                </li>
            </ul>
            <a bind="370734ad-4f23-3a69-a85a-2733e5383ae7" href={props.attributes.linkObject.url} className="button-22 w-button">{props.attributes.buttonText}</a>
        </div>

}
