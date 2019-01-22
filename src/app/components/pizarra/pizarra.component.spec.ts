import { async, ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { PizarraComponent } from "./pizarra.component";
import { Sugerencia } from "../models/sugerencia";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

describe("PizarraComponent", () => {
  let component: PizarraComponent;
  let fixture: ComponentFixture<PizarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [PizarraComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("le paso una sugerencia y me devuelve una sugerencia con un color random", () => {
    //Arrange
    let pizarra = component;
    //Act
    let sugerencianueva: Sugerencia = new Sugerencia();
    //assert
    expect(sugerencianueva.color).toBeUndefined();
    //act
    pizarra.colorRandom(sugerencianueva);
    //assert
    expect(sugerencianueva.color).not.toEqual("");
  });
  it("limpiar campos", () => {
    //escribo una sugerencia
    component.sugerencianueva.descripcion = "test";

    //vacío el campo
    component.limpiarCampos();

    //miro que el campo esté vacío
    expect(component.sugerencianueva.descripcion).toBeFalsy();
  });

  it("ver sugerencia nueva", () => {
    // let cantSugerencias = component.sugerenciasexistentes.length;
    //escribo una sugerencia nueva
    component.sugerencianueva.descripcion = "test2";
    //agregar la sugerencia
    component.verSugerenciaNueva()
    let cantSugerencias = component.sugerenciasexistentes.length;
    //ver la sugerencia
    expect(cantSugerencias).toBe(1);
  });
});
