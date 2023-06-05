import { InnerBlocks} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("blocktheme/faq-content", {
    title: "FAQ Content",
    edit: EditComponent,
    supports: {
        align: ["full"],
    },
    attributes: {
        color: {type: "string", default: ""},
    },
    save: SaveComponent,
});

function EditComponent(props) {

    return (
        <>
            <div className="faq-section wf-section">
                <div className="kutup-large-container">
                    <div className="kutup-max-w-width-640px _1">
                        <div className="div-block-5">
                            <h2 className="kutup-display-2">Veelgestelde vragen</h2>
                        </div>
                        <div className="kutup-divider-60px"></div>
                        <div className="div-block-6">
                            <div className="kutup-faq-componenet">
                                {/*!!*/}
                                <InnerBlocks allowedBlocks={["blocktheme/faq-subtitle", "blocktheme/faq-item"]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}
