import { InnerBlocks} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("blocktheme/section-diensten-software", {
    title: "Section Diensten Software",
    edit: EditComponent,
    supports: {
        align: ["full"],
    },
    attributes: {

    },
    save: SaveComponent,
});

function EditComponent(props) {
    return (
        <>
            <div className="rl-padding-global">
                <div className="rl-container-large bovenblog">
                    <div className="rl-padding-section-large">
                        <div className="rl_blog33_component">
                            <div className="rl_blog33_heading-wrapper"></div>
                            <div className="rl_blog33_list-wrapper">
                                <div className="blog-pagina-boven">
                                    <InnerBlocks allowedBlocks={["blocktheme/blog-static"]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />
}
