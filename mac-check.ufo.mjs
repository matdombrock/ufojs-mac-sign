export default {
	cmd: 'mac-check',
	help: 'iss - Checks the location of the international space station',
	async script(args, ufo, tools){
        const {$} = tools;
        await $`spctl -a -vvv -t install ${args[0]}`;
	}
}