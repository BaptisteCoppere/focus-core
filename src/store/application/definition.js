/**
* Build the cartridge store definition.
* @return {object} - The cartridge component.
*/
module.exports = () => {
    return ['summaryComponent', 'barContentLeftComponent', 'barContentRightComponent', 'cartridgeComponent', 'actions', 'mode', 'route', 'confirmConfig', 'canDeploy']
    .reduce((def, node) => {
        def[node] = node;
        return def;
    }, {});
};
