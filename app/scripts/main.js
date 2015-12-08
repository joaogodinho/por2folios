$(function() {
    $(".clickable-row").click(function() {
        var actTitle = $(".activity-title", this).text();
        var modal = $("#modal-activity-details");
        // Set title
        $(".modal-title", modal).text(actTitle);
        // Show modal
        $("#modal-activity-details").modal();
        // Load content into modal, real version should use
        // jquery.load() or similar.
        setTimeout(function() {
            $(".modal-body", modal).html('<table class="table borderless"><tbody><tr><th class="text-right" scope="row">Categoria</th><td>Estágios profissionais em Informática</td></tr><tr><th class="text-right" scope="row">Sub-Categoria</th><td>Desenvolvimento de software numa empresa (Xpand-IT)</td></tr><tr><th class="text-right" scope="row">Descrição</th><td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio odit, quibusdam quae eum incidunt a non inventore veniam quidem magni! Reiciendis tempora iusto magni ut accusamus ex fuga necessitatibus deleniti.</td></tr><tr><th class="text-right" scope="row">Rating</th><td class="rating"><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span></td></tr><tr><th class="text-right" scope="row">Palavras-Chave</th><td><a href="#" type="button" class="btn btn-default btn-xs">Portfólio</a><a href="#" type="button" class="btn btn-default btn-xs">full-time</a><a href="#" type="button" class="btn btn-default btn-xs">Instituto Superior Técnico</a><a href="#" type="button" class="btn btn-default btn-xs">Xpand IT</a><a href="#" type="button" class="btn btn-default btn-xs">Software Developer</a><a href="#" type="button" class="btn btn-default btn-xs">JIRA</a><a href="#" type="button" class="btn btn-default btn-xs">Leaseplan</a><a href="#" type="button" class="btn btn-default btn-xs">XRay</a></tr></tbody></table>');
        }, 2000);
    });

    // Reset the modal content to the loader
    $("#modal-activity-details").on('hidden.bs.modal', function() {
        $(".modal-body", this).html('<p class="text-center"><img src="images/loader.gif" alt="A carregar..."></p>');
    });
});