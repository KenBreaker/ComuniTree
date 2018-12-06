<div * ngIf="info" class="container" >
	<mat-form - field >
	<input matInput(keyup)="applyFilter($event.target.value)" placeholder = "Filtrar" >
		</mat-form-field>
		< div class="mat-elevation-z8" >
			<table mat - table[dataSource]="dataSource" matSort >
				<!--ID Column-- >
					<ng-container matColumnDef = "id" >
						<th mat - header - cell * matHeaderCellDef mat - sort - header > ID < /th>
							< td mat - cell * matCellDef="let row" > {{ row.id }} </td>
								< /ng-container>
								< !--Name Column-- >
									<ng-container matColumnDef = "name" >
										<th mat - header - cell * matHeaderCellDef mat - sort - header > Especie < /th>
											< td mat - cell * matCellDef="let row" > {{ row.name }} </td>
												< /ng-container>
												< !--Color Column-- >
													<ng-container matColumnDef = "color" >
														<th mat - header - cell * matHeaderCellDef mat - sort - header > Cantidad de reportes < /th>
															< td mat - cell * matCellDef="let row" > {{ row.report_counter }} </td>
																< /ng-container>
																< tr mat - header - row * matHeaderRowDef="displayedColumns" > </tr>
																	< tr mat - row * matRowDef="let row; columns: displayedColumns;" >
																		</tr>
																		< /table>
																		< mat - paginator[pageSizeOptions]="[5, 10, 25, 100]" > </mat-paginator>
																			< /div>
																			< /div>
