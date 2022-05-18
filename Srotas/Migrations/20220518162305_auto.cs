using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Srotas.Migrations
{
    public partial class auto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AutomobilioSkelbimas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Gamintojas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Modelis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rida = table.Column<int>(type: "int", nullable: false),
                    PagaminimoMetai = table.Column<int>(type: "int", nullable: false),
                    PavaruDezesTipas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    KuroTipas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Spalva = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Kaina = table.Column<double>(type: "float", nullable: false),
                    TuriRatus = table.Column<bool>(type: "bit", nullable: false),
                    RatuDydis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RatuPlotis = table.Column<int>(type: "int", nullable: false),
                    TuriVarikli = table.Column<bool>(type: "bit", nullable: false),
                    VariklioTuris = table.Column<double>(type: "float", nullable: false),
                    TuriPavaruDeze = table.Column<bool>(type: "bit", nullable: false),
                    TuriKoloneles = table.Column<bool>(type: "bit", nullable: false),
                    KoloneliuSkersmuo = table.Column<int>(type: "int", nullable: false),
                    TuriKapota = table.Column<bool>(type: "bit", nullable: false),
                    TuriDuris = table.Column<bool>(type: "bit", nullable: false),
                    Parduotas = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AutomobilioSkelbimas", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AutomobilioSkelbimas");
        }
    }
}
